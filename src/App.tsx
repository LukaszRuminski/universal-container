import React from 'react';
import { CssBaseline, ThemeProvider, Container, Typography, Box } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import UniversalContainer from './components/UniversalContainer/UniversalContainer';
import theme from './theme/theme';

const App: React.FC = () => {
    const referenceContents = [
        {
            referenceElementId: 'referenceEl1',
            content: (
                <Box p={2}>
                    <Typography variant="h4">Content for Reference Element 1</Typography>
                    <Typography paragraph>
                        This is a paragraph of text that provides some information about the first reference element.
                        It can be quite long and detailed to give the user a thorough understanding.
                    </Typography>
                    <ul>
                        <li><Typography>First bullet point</Typography></li>
                        <li><Typography>Second bullet point with more details</Typography></li>
                        <li><Typography>Third bullet point to illustrate the list</Typography></li>
                    </ul>
                    <Typography paragraph>
                        Here is some additional information in a new paragraph. This ensures that the content is well
                        structured and easy to read.
                    </Typography>
                </Box>
            ),
        },
        {
            referenceElementId: 'referenceEl2',
            content: (
                <Box p={2}>
                    <Typography variant="h4">Content for Reference Element 2</Typography>
                    <Typography paragraph>
                        This section contains an embedded video player, which can be useful for tutorials,
                        demonstrations, or any multimedia content.
                    </Typography>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <Typography paragraph>
                        Below the video, you can include more text, images, or any other type of content.
                    </Typography>
                </Box>
            ),
        },
        {
            referenceElementId: 'referenceEl3',
            content: (
                <Box p={2}>
                    <Typography variant="h4">Content for Reference Element 3</Typography>
                    <Typography paragraph>
                        This section can contain multiple headers and structured content to simulate a more complex
                        HTML page.
                    </Typography>
                    <Typography variant="h6">Subheader 1</Typography>
                    <Typography paragraph>
                        Detailed explanation under subheader 1. This can be used to break down the content into
                        manageable sections.
                    </Typography>
                    <Typography variant="h6">Subheader 2</Typography>
                    <Typography paragraph>
                        Detailed explanation under subheader 2. This helps in organizing the content and making it
                        more readable.
                    </Typography>
                    <ul>
                        <li><Typography>Important point 1</Typography></li>
                        <li><Typography>Important point 2 with extra information</Typography></li>
                        <li><Typography>Important point 3 for emphasis</Typography></li>
                    </ul>
                </Box>
            ),
        },
        {
            referenceElementId: 'referenceEl4',
            content: (
                <Box p={2}>
                    <Typography variant="h4">Content for Reference Element 4</Typography>
                    <Typography paragraph>
                        This section can simulate a full HTML page with various types of content.
                    </Typography>
                    <Typography variant="h6">Section 1</Typography>
                    <Typography paragraph>
                        Section 1 content with detailed explanations, images, links, and other elements.
                    </Typography>
                    <img src="https://via.placeholder.com/300x200" alt="Placeholder" style={{ width: '100%', height: 'auto' }} />
                    <Typography paragraph>
                        Image caption or additional text following the image.
                    </Typography>
                    <Typography variant="h6">Section 2</Typography>
                    <Typography paragraph>
                        Section 2 content can continue here. It includes more detailed information and explanations.
                    </Typography>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        Example link to an external resource
                    </a>
                    <Typography paragraph>
                        Additional text following the link to provide more context or information.
                    </Typography>
                </Box>
            ),
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <StyledThemeProvider theme={theme}>
                <CssBaseline />
                <Container style={{minWidth:'100vw'}}>
                    <Box sx={{ height: 2000, width: '100%' }}>
                        <Box sx={{ height: 1500, width: 300 }}></Box>
                        {referenceContents.map(({ referenceElementId }) => (
                            <>
                            <Box key={referenceElementId} mb={2}>
                                <Box
                                    id={referenceElementId}
                                    sx={{ border: '4px solid red', width: '100%', height: 40, mb: 2 }}
                                >
                                    {referenceElementId}
                                </Box>
                            </Box>
                            <Box mb={20} >

                            </Box>
                            </>
                        ))}
                        <UniversalContainer referenceContents={referenceContents} />
                    </Box>
                </Container>
            </StyledThemeProvider>
        </ThemeProvider>
    );
};

export default App;
