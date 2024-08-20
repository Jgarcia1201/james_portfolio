import { RefObject } from "react"

export interface OptionProps {
    onNavigate: (page: String) => void,
    option: NavOption,
    isSelected: Boolean
}

interface NavOption {
    val: String,
    label: String
}