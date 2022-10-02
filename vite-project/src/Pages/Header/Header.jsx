import { MdAttachMoney } from "react-icons/md";
import '../Header/Header.css'

export function Header () {
    return (
        <>
        <div className="header">
            
            <MdAttachMoney className="iconsHeader"/>
            <div className="headerMeio">
                <h3 className="titulo">Projeto Gabriel Grezzana vai pegando neném</h3>
            </div>
            <MdAttachMoney className="iconsHeader"/>
            
        </div>
        </>
    )
}