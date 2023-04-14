import { Data, Family } from '../common/types';

// Interface that are only used here
interface ChildMapper {
  id: number;
  child: number[];
  linkId: number | null;

  // Cyclic checker
  visited: boolean;
}

const cyclicParentObj: Record<string, number[]> = {};
const cyclicParent: number[] = [];

function initData(datas: Data[]) {
  // variable that will hold every child of a data
  const childMap: Record<string, ChildMapper> = {};

  for (const data of datas) {
    const key = data.id;
    childMap[key.toString()] = {
      id: -1,
      child: [],
      linkId: null,
      visited: false,
    };
    childMap[key.toString()].id = key;
    childMap[key.toString()].linkId = data.linkId;
  }

  return childMap;
}

function populateData(childMap: Record<string, ChildMapper>, datas: Data[]) {
  // Get every childred for each data
  for (const key in childMap) {
    const data: Data = datas[+key - 1];
    if (data?.linkId) {
      childMap[data.linkId.toString()].child.push(data.id);
    }
  }

  return childMap;
}

// iterate through each childMap data
function checkCycle(childMap: Record<string, ChildMapper>) {
  for (const key in childMap) {
    isCyclic(key, childMap);
    cyclicParent.splice(0, cyclicParent.length);
  }
}

/**
 * recursive that stops when a data in childmap was already visited
 * create a global array of cycled values
 */
function isCyclic(i: string, childMap: Record<string, ChildMapper>) {
  if (childMap[i].visited) {
    if (cyclicParent.length && childMap[i].linkId)
      cyclicParentObj[i] = cyclicParent.splice(0, cyclicParent.length);

    childMap[i].child = [];
  } else {
    childMap[i].visited = true;
    cyclicParent.push(childMap[i].id);
  }

  for (const child of childMap[i].child) {
    isCyclic(child.toString(), childMap);
  }

  for (const i in childMap) {
    childMap[i].visited = false;
  }
}

function isInCycle(id: number) {
  for (const key in cyclicParentObj) {
    if (cyclicParentObj[key].some((x) => x === id)) return true;
  }
}

function createFamily(childMap: Record<string, ChildMapper>, data: Data[]) {
  const family: Family[] = [];
  for (const key in childMap) {
    if (isInCycle(childMap[key].id) && childMap[key].linkId) continue;

    const parentName = data.find((x) => x.id === childMap[key].id)?.name;

    const childNames = [];
    for (const child of childMap[key].child) {
      childNames.push(data.find((x) => x.id === child)?.name);
    }
    if (!childMap[key].linkId) family.push({ parentName, childNames });
  }
  return family;
}

function loopedMembers(data: Data[]) {
  const oneLoop: (string | undefined)[] = [];
  const allLoop: Record<string, (string | undefined)[]> = {};

  for (const key in cyclicParentObj) {
    cyclicParentObj[key].forEach((e) => {
      oneLoop.push(data.find((x) => x.id === e)?.name);
    });
    allLoop[key] = structuredClone(oneLoop);
    oneLoop.splice(0, oneLoop.length);
  }
  return allLoop;
}

function whoIsPaying(data: Data[]) {
  let childMap = initData(data);
  childMap = populateData(childMap, data);

  const staticChildMap = structuredClone(childMap);

  checkCycle(childMap);

  const family = createFamily(staticChildMap, data);
  const loop = loopedMembers(data);
  return { family, loop };
}

export { whoIsPaying };
