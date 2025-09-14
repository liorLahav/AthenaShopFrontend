import { Shoe } from "../services/shoesApi/shoesApiService";

export const getDistictShoes =(shoes : Shoe[])=>{
    const seen = new Set<string>();
    const distinctShoes: Shoe[] = [];
    for (const cur of shoes) {
        const id = cur.id;
        if (seen.has(id)) continue;
        seen.add(id);
        distinctShoes.push(cur);
    }
    return distinctShoes;
}