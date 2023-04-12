export const GRID_CONFIG: Record<string, unknown> = {
  mobile: {
    postsContainer: {
      cols: [
        {
          width: '1fr',
        },
      ],
    },
  },
  tablet: {
    postsContainer: {
      cols: [
        {
          width: '1fr 1fr',
        },
      ],
    },
  },
  desktop: {
    postsContainer: {
      cols: [
        {
          width: 'repeat(3, 1fr)',
        },
      ],
    },
  },
};
