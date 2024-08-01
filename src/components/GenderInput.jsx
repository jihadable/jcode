import { IconChevronDown } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react"
import "../style/BirthAndGenderInput.css"

export default function GenderInput({ gender, setGender }){

    const [isShowGenderMenu, setIsShowGenderMenu] = useState(false)
    const showGenderBtn = useRef(null)

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showGenderBtn.current?.contains(e.target)){
                setIsShowGenderMenu(false)
            }
        })   
    })

    return (
        <div className="gender">
            <div className="label">Jenis Kelamin</div>
            <div className="gender-dropdown">
                <div className="value" onClick={() => setIsShowGenderMenu(!isShowGenderMenu)} ref={showGenderBtn}>
                    <span>{gender}</span>
                    <IconChevronDown stroke={1.5} width={16} height={16} />
                </div>
                <div className={`menu ${isShowGenderMenu ? "active" : ""}`}>
                    <div onClick={() => setGender("Laki-laki")}>Laki-laki</div>
                    <div onClick={() => setGender("Perempuan")}>Perempuan</div>
                </div>
            </div>
        </div>
    )
}