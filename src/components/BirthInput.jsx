import { IconChevronDown } from "@tabler/icons-react"
import { useEffect, useRef, useState } from "react"
import "../style/BirthAndGenderInput.css"

export default function BirthInput({ birth, setBirth }){

    const initial = new Date(birth)
    const initialYear = initial.getFullYear()
    const initialMonth = initial.getMonth()
    const initialDate = initial.getDate()

    const years = Array(50).fill(0).map((_, index) => new Date().getFullYear() - index)
    const [selectedYear, setSelectedYear] = useState(initialYear)
    const [isShowYearMenu, setIsShowYearMenu] = useState(false)
    const showYearBtn = useRef(null)

    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
    const [selectedMonth, setSelectedMonth] = useState(months[initialMonth])
    const [isShowMonthMenu, setIsShowMonthMenu] = useState(false)
    const showMonthBtn = useRef(null)

    const [dates, setDates] = useState([])
    const [selectedDate, setSelectedDate] = useState(initialDate)
    const [isShowDateMenu, setIsShowDateMenu] = useState(false)
    const showDateBtn = useRef(null)

    const isLeapYear = year => {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
    }

    useEffect(() => {
        let newDates = []

        if ("JanMarMeiJulAguOktDes".includes(selectedMonth)){
            newDates = Array(31).fill(0).map((_, index) => index + 1)
        }
        else {
            if (selectedMonth === "Feb"){
                if (isLeapYear(selectedYear)){
                    newDates = Array(29).fill(0).map((_, index) => index + 1)
                }
                else {
                    newDates = Array(28).fill(0).map((_, index) => index + 1)
                }
            }
            else {
                newDates = Array(30).fill(0).map((_, index) => index + 1)
            }
        }

        setDates(newDates)
    }, [selectedMonth, selectedYear])

    useEffect(() => {
        const birthValue = `${selectedYear}-${months.indexOf(selectedMonth) + 1}-${selectedDate}`

        setBirth(birthValue)
    }, [selectedDate, selectedMonth, selectedYear])

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showDateBtn.current?.contains(e.target)){
                setIsShowDateMenu(false)
            }
            if (!showMonthBtn.current?.contains(e.target)){
                setIsShowMonthMenu(false)
            }
            if (!showYearBtn.current?.contains(e.target)){
                setIsShowYearMenu(false)
            }
        })   
    })

    return (
        <div className="birth">
            <div className="label">Tanggal Lahir</div>
            <div className="birth-menu">
                <div className="date">
                    <div className="value" onClick={() => setIsShowDateMenu(!isShowDateMenu)} ref={showDateBtn}>
                        <span>{selectedDate}</span>
                        <IconChevronDown stroke={1.5} width={16} height={16} />
                    </div>
                    <div className={`menu ${isShowDateMenu ? "active" : ""}`}>
                    {
                        dates.map(date => (
                            <div onClick={() => setSelectedDate(date)} key={date}>{date}</div>
                        ))
                    }
                    </div>
                </div>
                <div className="month">
                    <div className="value" onClick={() => setIsShowMonthMenu(!isShowMonthMenu)} ref={showMonthBtn}>
                        <span>{selectedMonth}</span>
                        <IconChevronDown stroke={1.5} width={16} height={16} />
                    </div>
                    <div className={`menu ${isShowMonthMenu ? "active" : ""}`}>
                    {
                        months.map(month => (
                            <div onClick={() => setSelectedMonth(month)} key={month}>{month}</div>
                        ))
                    }
                    </div>
                </div>
                <div className="year">
                    <div className="value" onClick={() => setIsShowYearMenu(!isShowYearMenu)} ref={showYearBtn}>
                        <span>{selectedYear}</span>
                        <IconChevronDown stroke={1.5} width={16} height={16} />
                    </div>
                    <div className={`menu ${isShowYearMenu ? "active" : ""}`}>
                    {
                        years.map(year => (
                            <div onClick={() => setSelectedYear(year)} key={year}>{year}</div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}