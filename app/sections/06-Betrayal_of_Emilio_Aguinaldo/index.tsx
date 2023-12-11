"use client";
import DoubleTextBlock from "@/common/DoubleTextBlock"
import EvidenceCarousel from "@/common/EvidenceCarousel"
import ListBlock from "@/common/ListBlock";
import SectionHeader from "@/common/SectionHeader"
import SingleTextBlock from "@/common/SingleTextBlock"
import { itemType } from "@/utils"
import { Typography } from "@mui/material"
import { title } from "process"

export default function Sixth() {
    const items = [
        {
            name: "Betrayal of Emilio Aguinaldo Evidence 1",
            description: "“There is an ominous note, foreshadowing the violent events that would unfold in a matter of weeks,” says gallery curator Lisa Guerrero Nakpil.",
            src: "/img/Betrayal_of_Emilio_Aguinaldo-1.png"
        },
        {
            name: "Betrayal of Emilio Aguinaldo Evidence 2",
            description: "The letters were written on Bonifacio’s official stationery with the letterhead stamped with his official seal.",
            src: "/img/Betrayal_of_Emilio_Aguinaldo-2.png"
        },
        {
            name: "Betrayal of Emilio Aguinaldo Evidence 3",
            description: "These letters were Bonifacio’s last before he was killed on May 10, 1897.",
            src: "/img/Betrayal_of_Emilio_Aguinaldo-3.png"
        },
        {
            name: "Betrayal of Emilio Aguinaldo Evidence 4",
            description: "Envelope (right) used to contain the Notice of Appointment of Emilio Jacinto (left)",
            src: "/img/Betrayal_of_Emilio_Aguinaldo-4.png"
        },
        
    ]

    const facts = [
        
        
    ]

    return (
        <div>
            <SectionHeader 
                headerInfo={{
                    title: "Betrayal of Emilio Aguinaldo", 
                    subtitle:"1897", 
                    description: "The betrayal of Emilio Aguinaldo refers to a complex historical episode in the Philippines during the Philippine-American War (1899-1902) and the subsequent period of American colonization. Emilio Aguinaldo, the leader of the Filipino forces during the Philippine Revolution against Spanish rule, later found himself in a challenging position as the Philippines transitioned from Spanish to American control."
                }}/>
            <SingleTextBlock>
                Accounts of one of Philippine history’s biggest betrayals are now available for viewing at Leon Gallery in Makati. And they’re not pretty.
            </SingleTextBlock>
            <EvidenceCarousel items={items}/>
            <DoubleTextBlock
                first={<ListBlock list={[
                    'Displayed in the middle of the gallery are five papers of utmost historical importance—three Andres Bonifacio Letters, and an Emilio Jacinto notice of appointment and its philatelic cover—which most historians refer to when it comes to the issue of betrayal at Tejeros Convention or the country’s first election and “snap” election in 1897.',
                    'The first note is one of the surviving handwritten letters that Bonifacio sent to the “Brains of Katipunan” Emilio Jacinto from Cavite, according to scholar Jim Richardson in his book Light of Liberty: Documents and Studies on the Katipunan, 1892-1897. In this brief note dated Mar. 8, 1897, “Bonifacio asks Jacinto to use the ‘code of the second degree’ if he has to write anything in confidence, because, he says, Jacinto’s letters are reaching him already opened.”',
                    'A few days after the Supremo sent the first letter, the Tejeros Convention took place (Mar. 22). In the collection’s second letter, Bonifacio tells Jacinto what happened in the election. “The meeting, he says, had ended in chaos and consequently had no significance. Implicit in his letter is a bitter recognition that not all the revolutionary forces still recognize the authority of the Katipunan,” says Richardson.'
                ]}/>}
                second={<ListBlock list={[
                    'The third letter dated Apr. 24 is more lengthy with Bonifacio reiterating what he wrote to Jacinto; he didn’t know whether Jacinto had received his previous letter dated Apr. 16—that some territories in Cavite had been retaken by the Spaniards, a number of Magdalo leaders had surrendered, and that the decisions of the Tejeros Convention had been vetoed.',
                    'The Supremo also wrote that he was camped outside Indang, Cavite with about 1,000 troops and was just waiting for his emissary Antonino Guevara to return and report back to him from the north. But Guevara never returned until Aguinaldo’s delegation killed Bonifacio in the mountains of Maragondon, according to Nakpil.',
                    '“Bonifacio would not perish at the hands of the Spanish, like Jose Rizal, but in the greatest travesties of Philippine history, at the hands of his countrymen,” writes Nakpil in the gallery’s catalog.'
                ]}/>}
            />
        </div>
    )
}