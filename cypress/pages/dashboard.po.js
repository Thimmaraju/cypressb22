
import loginPage from "./login.po"
class dashBoardPage extends loginPage{

    dashboardMenu(){

        return "Dashboard"
    }
    PIMMenu(){

        return "PIM"
    }
}

const dasboard = new dashBoardPage()

export default dasboard