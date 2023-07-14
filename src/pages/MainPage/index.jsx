import Zksync from "@pages/Zksync/index.jsx";
import {useLocation} from "react-router-dom";
import {Layout} from "antd";
import Layer from "@pages/Layer/index.jsx";

function MainPage() {
    const location = useLocation()
    return (
        <div
            style={{
                backgroundColor: "#f0f2f5",
                minHeight: "100vh",
            }}
        >
            {/*<Notice/>*/}
            <Layout>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        zIndex: 1,
                    }}
                >
                </div>

                <h1 style={{textAlign: "center", fontSize: "30px"}}>zksync era辅助撸毛工具</h1>
                <div
                    style={{
                        // paddingTop: "5px",
                        minHeight: "85vh",
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                        borderRadius: "4px",
                        marginTop: "45px",
                    }}
                >
                    <div>
                        {location.pathname === "/" && <Zksync/>}
                        {location.pathname === "/zksync" && <Zksync/>}
                        {location.pathname === "/stark" && <Stark/>}
                        {location.pathname === "/layer" && <Layer/>}
                        {location.pathname === "/mirror" && <Mirror/>}
                        {location.pathname === "/coffee" && <Coffee/>}
                        {location.pathname === "/deposit" && <Deposit/>}
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default MainPage;
