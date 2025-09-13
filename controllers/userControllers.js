import { getCsvAsArrayALT } from "../models/dataSource.js";

/**
 * Hämtar användar-data via "models/dataSource.js" och returnerar i JSON-format.
 * 
 * @param {*} req medföljande request-data
 * @param {*} res respons-data som skickas tillbaka
 * @returns 
 */
export const getUsers = 
async(req, res) => {
    let limit = req.query.limit;

    if(limit != undefined && limit < 0) {
        res.status(400).json({
            message: "Limit cannot be below 0."
        });
        return;
    } 
    else if (limit === undefined) {
        limit = 0;
    };

    try {
        const data = await getCsvAsArrayALT(limit);
        
        if(!data.length) {
            res.status(204).json({message: "The CSV file is empty"});
            return;
        }
      
        res.status(200).json({"users": data});
        return;

    } catch(err) {
        res.status(500).json({
            message: "The CSV file could not be found."
        });
        return;
    }
}