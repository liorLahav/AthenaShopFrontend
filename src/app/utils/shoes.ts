import { BasicShoe } from "../../graphql/generated";

export const getDistictShoes =(shoes : BasicShoe[])=>{
    const seen = new Set<string>();
    const distinctShoes: BasicShoe[] = [];
    for (const cur of shoes) {
        const id = cur.id;
        if (seen.has(id)) continue;
        seen.add(id);
        distinctShoes.push(cur);
    }
    return distinctShoes;
}