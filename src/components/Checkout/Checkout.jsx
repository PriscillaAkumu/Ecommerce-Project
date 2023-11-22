import React from "react"
import { useForm } from "react-hook-form"
import { Grid } from "@mui/material"
import CheckoutForm from "./Form"
import Billing from "./Billing"
import classes from "./checkout.module.css"

export default function CheckoutSection() {
    const form = useForm({mode:"all"})
    const { handleSubmit } = form

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log("form submited", data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <CheckoutForm {...form} />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Billing {...form} />
                </Grid>
            </Grid>
        </form>
    )
}
