
const add = (a: number, b: number): number => a + b
const gt = (a: number, b: number): boolean => a > b

export const solve = (input: string): number => {
  return input.split('\n')
    .map((item: string, index: number, all: string[]): number => + (index === 0 ? false : gt(+ item, + all[index-1])))
    .reduce(add)
}