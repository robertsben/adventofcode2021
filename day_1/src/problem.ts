import axios, {AxiosResponse} from "axios";
import * as cheerio from "cheerio";
import {CheerioAPI} from "cheerio";
import {promises} from "fs";
import * as path from "path";

const BASE_URL = 'https://adventofcode.com/2021';
const PROBLEM_URL = `${BASE_URL}/day/1`;
const PATH = path.join(__dirname, '..', 'fixtures');

const fetchProblem = (): Promise<string> => {
  return axios
    .get(`${PROBLEM_URL}`)
    .then((response: AxiosResponse): CheerioAPI => cheerio.load(response.data))
    .then(($: CheerioAPI) => $('article.day-desc').text())
}

/**
 * I didn't realise until I'd implemented all this that the input is actually behind a login :/
 * Don't think there's docs on how to do the AoC oAuth either. Ah well.
 */
const fetchInput = (): Promise<string> => {
  return axios
    .get(`${PROBLEM_URL}/input`)
    .then((response: AxiosResponse): string => response.data)
}

const getData = (fname: string, fetchFn: () => Promise<string>): Promise<string> => {
  const fp = path.join(PATH, fname)

  return promises.readFile(fp, {encoding: 'utf-8'})
    .catch(fetchFn)
    .then(problem => promises.writeFile(fp, problem, {encoding: 'utf-8', flag: 'w'}))
    .then(() => promises.readFile(fp, {encoding: 'utf-8'}))
};

export const getProblem = () => getData('problem.txt', fetchProblem);
export const getInput = () => getData('input.txt', fetchInput);
