import './socialMedia.scss';
import { IconButton } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

export const SocialMedia = ({fontsize, boostClass}) => {
    return (
        <div className={`social-media ${boostClass} pb-5`}>
            <IconButton sx={{ cursor: 'none!important', '&:active': { backgroundColor: '#9b9b9b' } }}>

                <a style={{ cursor: 'none', display: 'inherit' }}
                    href="https://www.facebook.com/narek.martirosyan.399"
                    target={'_blank'}
                    rel='noreferrer'
                >
                    <FacebookRoundedIcon sx={{
                        cursor: 'none', color: 'white',
                        '&:hover': { color: 'rgb(138, 137, 137)' },
                        '&:active': { color: 'blue' },
                        fontSize: fontsize
                    }} />
                </a>
            </IconButton>

            <IconButton sx={{ cursor: 'none!important', '&:active': { backgroundColor: '#9b9b9b' } }}>
                <a style={{ cursor: 'none', display: 'inherit' }}
                    href="https://twitter.com/narek______"
                    target={'_blank'}
                    rel='noreferrer'
                >
                    <TwitterIcon sx={{
                        cursor: 'none',
                        color: 'white',
                        '&:hover': { color: 'rgb(138, 137, 137)' },
                        '&:active': { color: 'blue' },
                        fontSize: fontsize
                    }} />
                </a>
            </IconButton>

            <IconButton sx={{ cursor: 'none!important', '&:active': { backgroundColor: '#9b9b9b' } }}>
                <a style={{ cursor: 'none', display: 'inherit' }}
                    href="https://www.linkedin.com/in/narekmartiros/"
                    target={'_blank'}
                    rel='noreferrer'
                >
                    <LinkedInIcon sx={{
                        cursor: 'none',
                        color: 'white',
                        '&:hover': { color: 'rgb(138, 137, 137)' },
                        '&:active': { color: 'blue' },
                        fontSize: fontsize
                    }} />
                </a>
            </IconButton>

            <IconButton sx={{ cursor: 'none!important', '&:active': { backgroundColor: '#9b9b9b' } }}>
                <a style={{ cursor: 'none', display: 'inherit' }}
                    href="https://www.bzbzik.com/"
                    target={'_blank'}
                    rel='noreferrer'
                >
                    <LanguageIcon sx={{
                        cursor: 'none',
                        color: 'white',
                        '&:hover': { color: 'rgb(138, 137, 137)' },
                        '&:active': { color: 'blue' },
                        fontSize: fontsize
                    }} />
                </a>
            </IconButton>
        </div>
    )
}