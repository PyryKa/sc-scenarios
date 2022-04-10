import { Box, Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HomeContainer, HomePaper } from "./styles";
import Zoom from '@mui/material/Zoom';
import { useNavigate } from "react-router-dom";


interface Home {

}

const Home = (props: Home) => {
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialized(true);
            clearTimeout(timer);
        }, 200)
        return () => clearTimeout(timer);
    }, [])

    const navigate = useNavigate();

    return (
        <HomeContainer>
            <Zoom in={initialized} appear={true}>
            <HomePaper>
                <Grid container rowSpacing={4}>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate('/scenario')}
                        >
                            New Scenario
                        </Button>
                    </Grid>
                    <Grid item xs={12}>

                        <Button
                            fullWidth
                            variant="contained"
                        >
                            Load Scenario
                        </Button>
                    </Grid>

                </Grid>
            </HomePaper>
            </Zoom>
        </HomeContainer>
    )
}

export default Home;