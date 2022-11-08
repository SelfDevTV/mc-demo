import create from "zustand";

interface WorldState {
  cubes: {
    x: number;
    y: number;
    z: number;
  }[];
  addCube: (x: number, y: number, z: number) => void;
  generateWorld: (cubeCount: number) => void;
}

const generateWorld = (cubeCount: number) => {
  for (let i = 0; i < cubeCount; i++) {}
};

export const useStore = create<WorldState>((set, get) => ({
  cubes: [],
  addCube: (x, y, z) =>
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          x,
          y,
          z,
        },
      ],
    })),
  generateWorld: (cubeCount) => {
    console.log("hi from generate world");
    for (let i = 0; i < cubeCount; i++) {
      for (let j = 0; j < cubeCount; j++) {
        const newCube = {
          x: i,
          y: 0,
          z: j,
        };
        get().addCube(newCube.x, newCube.y, newCube.z);
      }
    }
  },
}));
