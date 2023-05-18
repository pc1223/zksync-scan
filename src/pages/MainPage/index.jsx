
import Zksync from "@pages/Zksync/index.jsx";
import {Layout} from "antd";

function MainPage() {
    return (
        <div
            style={{
                backgroundColor: "#f0f2f5",
                minHeight: "100vh",
            }}
        >
            <Layout>
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        zIndex: 1000,
                    }}
                >
                </div>
                <div
                    style={{
                        minHeight: "95vh",
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                        borderRadius: "4px"
                    }}
                >
                    <div>
                        <Zksync/>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default MainPage;
