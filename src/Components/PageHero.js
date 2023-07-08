import styled from 'styled-components'
import icon from '../assets/icon.svg'
import btnDown from '../assets/down.svg'

const PageHero = () => {
    return (
    <Wrapper>
        <header className="hero">
            <div className="header-left">
                <div className="name-container">
                    <img className="icon-img img" src={icon} alt="O"/>
                    <h2 className="name">Pratik Sharma</h2>
                </div>
                <h4 className="degree">Electronics and Communication Engineer</h4>
                <h2 className="tagline">Crafting digital innovations through code, design and imagination.</h2>
                
                <button className="btn-more">
                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19.5" cy="19.5" r="19.5" fill="white" fillOpacity="0.8"/>
                        <path d="M17.92 12H21.92V21L25.42 17.5L27.84 19.92L19.92 27.84L12 19.92L14.42 17.5L17.92 21V12Z" fill="#39A0ED"/>
                    </svg>
                    <span>View Projects</span>
                </button>
            </div>
            <div className="header-right">
                HELLO HELLO
            </div>
        </header>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    /* hero */
    .hero{
        height: 100vh;
        width: 100vw;
        overflow-y: scroll;
        background: linear-gradient(110.43deg, #60b2f0 0%, #2E80BE 100%);
        display: flex;
        align-items: center;
        justify-content: center;

        .header-left{
            max-width: 75%;
            margin-left: 1.25rem;
            user-select: none;
            .name-container{
                position: relative;
                .icon-img{
                    position: absolute;
                    transform: translate(-50%,-40%);
                    height: 7.2rem;
                    width: 7.2rem;
                    opacity: 0.1;
                }
                .name{
                    width: fit-content;
                    position: relative;
                    letter-spacing: 0em;
                    line-height: 1;
                    font-size: 2rem;
                    font-weight: 600;
                }
            }

            .degree{
                font-size: 1rem;
            }

            .tagline{
                font-size: 1.2rem;
                max-width: 380px;
            }

            .btn-more{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-top: 3.25rem;
                background: transparent;
                border: transparent;
                font-size: 1rem;
                font-weight: 700;
                color: var(--white);

                svg{
                    transition: var(--transition);
                    &:hover{
                        cursor: pointer;
                        transform: scale(1.1);
                        transition: var(--transition);
                    }
                }

            }

        }

        /* hide header-right in small screen */
        .header-right{
            display: none;
        }
    }
`

export default PageHero
