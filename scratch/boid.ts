type BoidFunction = (other: Boid) => void;

interface Boid {
  draw: VoidFunction;
  move: VoidFunction;
  notice: BoidFunction;
}

const tweety: Boid = {
  draw: () => {},
  move: () => {},
  notice: (other: Boid) => {},
};
