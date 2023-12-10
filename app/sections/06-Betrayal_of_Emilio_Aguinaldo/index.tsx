import EvidenceCarousel from "@/common/EvidenceCarousel"
import SectionHeader from "@/common/SectionHeader"
import { itemType } from "@/utils"
import { title } from "process"

interface itemsType extends Array<itemType> {}

export default function Sixth() {
    let items: itemsType = [
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

    return (
        <div>
            <SectionHeader 
                headerInfo={{
                    title: "Betrayal of Emilio Aguinaldo", 
                    subtitle:"1897", 
                    description: "The betrayal of Emilio Aguinaldo refers to a complex historical episode in the Philippines during the Philippine-American War (1899-1902) and the subsequent period of American colonization. Emilio Aguinaldo, the leader of the Filipino forces during the Philippine Revolution against Spanish rule, later found himself in a challenging position as the Philippines transitioned from Spanish to American control."
                }}/>
            <EvidenceCarousel items={items}/>

            helllooooo
        </div>
    )
}