import { promises as fs } from "fs";

const DATA_SOURCE = "./data.csv";

/*
import {parse} from 'csv-parse/sync';

/**
 * 
 * @param {*} limit anger hur många användare som ska hämtas från .csv-filen
 * @returns 
 
export const getCsvAsArray = async(limit) => {
    try {
        const data = await fs.readFile(DATA_SOURCE, {encoding: "utf8"});

        let csvValues = [];

        if(limit > 0) {
            csvValues = parse(data, {delimiter: ";", to: limit});
        }
        else {
            csvValues = parse(data, {delimiter: ";"});
        }
        
        return csvValues;

    } catch(err) {
        
        throw err;
    }
}
*/

/**
 * ALT. version utan paketet 'csv-parse'.
 * 
 * @param {*} limit anger hur många användare som ska hämtas från .csv-filen
 * @returns String[][] om .csv-filen inte är tom. Returnerar [] annars.
 */
export const getCsvAsArrayALT = async(limit) => {
     try {
        const data = await fs.readFile(DATA_SOURCE, {encoding: "utf8"});

        let csvValues = [];
        let dataArray = data.split("\r\n");
       
        dataArray.forEach(entry =>{
            if(entry.length > 0) {
                csvValues.push(entry.split(";"));
            }
        });
        
        return csvValues;

    } catch(err) {
        throw err;
    }
}