import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles((theme) => ({

    //utility

    navlink: {
        textDecoration: "none",
        color: "black",
        fontSize: "18px",
        fontWeight: "600",
        display: "block",
        "&:hover": {
            textDecoration: "underline",
            color: "black"
        }
    },

    card: {
        margin: "2rem 0"
    },
    cardContent: {
        textTransform: "capitalize",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "14px",
        borderBottom: "1px solid #aaaaaa",
        display: "block",
        padding: "10px 0 5px 0",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    veriticaladd: {
        minHeight: "500px",
        maxWidth: "200px",
        width: "80%",
        margin: "2rem auto",
    },

    showcase: {
        margin: "2rem 0",
    },

    normaladd: {
        maxWidth: "200px",
        width: "80%",
        margin: "2rem auto",
    },
    socialicon: {
        marginRight: "1rem",
    },
    socialtext: {
        color: "black",
        "&:hover": {
            textDecoration: "underline",
            color: "blue"
        }
    },
    socialtitle: {
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: "16px",
        fontFamily: "pepsi",
        letterSpacing: "0.6px",
        paddingBottom: "1rem",
    },
    smcard: {
        margin: "2rem 0"
    },
    //about

    about_text: {
        padding: "15px 0",
        fontSize: "15px",
        color: "#063970",
        fontWeight: "500",
        textTransform: "capitalize",
    }
}))