import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import logoFooter from "../../assets/logo_footer.svg";
import instagram from "../../assets/instagram.svg";
import shopee from "../../assets/shopee.svg";
export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          background: "#FEC2C2",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: { xs: "6vh", sm: "2vh" },
          padding: { xs: "8vw", sm: "5vh" },
        }}
      >
        <Box>
          <img
            src={logoFooter}
            alt="logoFooter"
            style={{
              width: "100px",
              display: "block",
            }}
          />
        </Box>
        <Box>
          <Link href="https://shopee.com.br/bandanes">
            <img src={shopee} alt="shopee" style={{ width: "30px" }} />
          </Link>
        </Box>
      </Box>
    </div>
  );
}
