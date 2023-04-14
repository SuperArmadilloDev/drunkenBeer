import { useEffect, useState } from 'react';
import { Data, Family } from '../../common/types';
import { whoIsPaying } from '../../Service/FindParent';

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { Upload } from '@progress/kendo-react-upload';

const FamilyTree = () => {
  let data: Data[] = require('../../data/donneesTest.json');
  const [families, setFamilies] = useState<Family[]>();
  const [cycle, setCycle] = useState<Record<string, (string | undefined)[]>>();

  useEffect(() => {
    const { family, loop } = whoIsPaying(data);
    setFamilies(family);
    setCycle(loop);
  }, [data]);

  return (
    <div>
      <PanelBar>
        <PanelBarItem
          expanded={true}
          title={'Who is Paying?'}
          uniquePrivateKey='id1'
        >
          {families?.map((family) => {
            return (
              <PanelBarItem
                uniquePrivateKey={family.parentName}
                title={`${family.parentName} ${
                  family.childNames.length
                    ? '-- click here to see who you are paying for!'
                    : ''
                }`}
              >
                {family.childNames.length &&
                  family.childNames.map((children) => {
                    return (
                      <PanelBarItem
                        uniquePrivateKey={children}
                        title={children}
                      />
                    );
                  })}
              </PanelBarItem>
            );
          })}
        </PanelBarItem>
        <PanelBarItem
          uniquePrivateKey='id2'
          title={'Cycling problems!'}
        >
          {Object.keys(cycle ?? {}).map((e) => {
            const rend = cycle
              ? cycle[e].map((y) => {
                  return (
                    <PanelBarItem
                      uniquePrivateKey={y}
                      title={`${y} ${
                        cycle[e].length === 1
                          ? '-- you should pay for yourself'
                          : ''
                      }`}
                    />
                  );
                })
              : undefined;
            return (
              <PanelBarItem
                title={`click here to see the cycling group`}
                uniquePrivateKey={e}
              >
                {rend}
              </PanelBarItem>
            );
          })}
        </PanelBarItem>
      </PanelBar>

      <Upload
        batch={false}
        multiple={false}
        defaultFiles={[]}
        withCredentials={false}
        saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
        removeUrl={
          'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'
        }
      />
    </div>
  );
};

export default FamilyTree;
