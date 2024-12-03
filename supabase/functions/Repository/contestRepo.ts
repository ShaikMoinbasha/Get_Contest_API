import supabase from "../common/DBconnection.ts";

export default async function getContestById(contestId:string) {
    try{
        console.log(`fetching the data of:${contestId}`)
        const{data:getData,error} = await supabase
        .from("Contest_Entry")
        .select("*")
        .eq("contest_id",contestId)
        .single();

        if(error){
            console.error("Database Error:", error);
            throw new Error("Failed to fetch data")
        }
       

        return getData;
        
    } catch(error){
        console.log("Unexpected error occured",error);
        throw new Error("Unexpected error occurred.")
    }
}