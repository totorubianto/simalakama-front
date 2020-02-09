import React from 'react';
import { PersonaVerticalStyle, PersonaHorizontalStyle } from './styles/PersonaStyle';
import { PersonaSize, getNum, PersonaMode } from './enum/persona-size.enum';
import Text from '../text/Text';
import { TextType, TextSize } from '../text/enum/text.enum';
import { Link } from 'react-router-dom';
interface Props {
    imgURL: string;
    width: PersonaSize;
    mode: PersonaMode;
    textTitle?: string;
    textSubtitle?: string;
    to: string;
}

const Persona: React.FC<Props> = ({ imgURL, width, mode, textTitle, textSubtitle, to }) => {
    return (
        <>
            {mode === PersonaMode.VERTICAL ? (
                <PersonaVerticalStyle>
                    <img
                        src={imgURL}
                        style={{
                            width: `${getNum(width)}px`,
                            height: `${getNum(width)}px`,
                            borderRadius: '50%',
                        }}
                        alt=""
                    />
                    {textTitle ? (
                        <Link to={to}>
                            <Text
                                type={TextType.HEADLINE}
                                text={textTitle}
                                textSize={TextSize.NORMAL}
                                margin={{ bottom: 5, top: 20 }}
                            />
                        </Link>
                    ) : null}

                    {textSubtitle ? (
                        <Text
                            type={TextType.PARAGRAPH}
                            text={textSubtitle}
                            textSize={TextSize.SMALL}
                        />
                    ) : null}
                </PersonaVerticalStyle>
            ) : (
                <PersonaHorizontalStyle>
                    <img
                        src={imgURL}
                        style={{
                            width: `${getNum(width)}px`,
                            height: `${getNum(width)}px`,
                            borderRadius: '50%',
                        }}
                        alt=""
                    />
                    <div className="text-group">
                        {textTitle ? (
                            <Link to={to}>
                                <Text
                                    type={TextType.HEADLINE}
                                    text={textTitle}
                                    textSize={TextSize.NORMAL}
                                />
                            </Link>
                        ) : null}

                        {textSubtitle ? (
                            <Text
                                type={TextType.PARAGRAPH}
                                text={textSubtitle}
                                textSize={TextSize.SMALL}
                            />
                        ) : null}
                    </div>
                </PersonaHorizontalStyle>
            )}
        </>
    );
};

export default Persona;
