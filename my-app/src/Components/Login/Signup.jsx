import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signupUser } from "../../Redux/Auth/action";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                The Hindu
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: "40px",
        fontSize: "18px",
    },
    input: {
        width: "100%",
        fontSize: "25px",
    },
    question: {
        fontSize: "16px",
    },
}));

const initState = {
    name: "",
    email: "",
    password: "",
    username: "",
};
const SignUp = () => {
    const classes = useStyles();
    const [details, setDetails] = React.useState(initState);
    const dispatch = useDispatch();
    const history = useHistory();

    // Takes up user input when user type on input field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value,
        });
    };

    // Sign up api call when user clicks on sugn up button
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            ...details,
            id: uuid(),
        };
        dispatch(signupUser(payload)).then((status) => {
            handleRedirect(status);
        });
    };

    // Takes user on signin page if sign up is successfull
    const handleRedirect = (status) => {
        if (status === 201) {
            history.push("/signin");
        } else {
            window.alert("Something went wrong, please try again!");
        }
    };

    return (
        <>
            <Header />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.input}
                                    autoComplete="fname"
                                    name="name"
                                    variant="standard"
                                    required
                                    id="firstName"
                                    placeholder="Name"
                                    autoFocus
                                    onChange={handleChange}
                                    value={details.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="UserName"
                                    placeholder="User Name"
                                    name="username"
                                    onChange={handleChange}
                                    value={details.username}
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="Email Address"
                                    name="email"
                                    onChange={handleChange}
                                    value={details.email}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.input}
                                    variant="standard"
                                    required
                                    margin="dense"
                                    dense
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    id="password"
                                    value={details.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link
                                    className={classes.question}
                                    href="/signin"
                                    variant="body2"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export { SignUp };
