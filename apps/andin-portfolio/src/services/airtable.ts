import Airtable from "airtable"

export const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE ?? '')


// maps over the records, calling minifyRecord, giving us required data
export const getMinifiedRecords = (records: any) => {
    return records.map((record: any) => minifyRecord(record));
}

// gets the data we want and puts it into variables
const minifyRecord = (record: any) => {
    return {
        id: record.id,
        fields: record.fields,
    }
}
