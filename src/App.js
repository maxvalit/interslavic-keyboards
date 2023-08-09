import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'react-grid-system'
import React, {useEffect, useRef, useState} from "react";
import {Keyboard} from "./Keyboard";
import {qwerty, IslLatin, IslCyrillic} from "./layouts";
import './Button.sass'
import islFlag from './flags/isl.svg'
import ukFlag from './flags/uk.svg'


let global = {}
let globalText = ''
let globalLayout = qwerty

function App() {

    const [pressed, setPressed] = useState({})
    const [text, setText] = useState(globalText)
    const [layout, setLayout] = useState(qwerty)

    const up = x => {
        let z = {...global, [x.code]: false}
        global = z
        setPressed(z)

    }
    const down = x => {
        const z = {...global, [x.code]: true}
        global = z
        console.log(global)
        setPressed(z)
        const shift = global['ShiftLeft'] || global['ShiftRight']
        if (['Tab', 'MetaLeft', 'MetaRight'].includes(x.code)) {
            setTimeout(() => up({code: x.code}), 1000)
        }

        if (x.code === 'Backspace') {
            globalText = globalText.substring(0, Math.max(globalText.length - 1, 0))
            setText(globalText)

        }
        if (x.code === 'Space') {
            globalText = globalText + ' '
            setText(globalText)
        }
        if (x.code === 'Enter') {
            globalText = globalText + '\n'
            setText(globalText)

        }

        let [d, u,] = (globalLayout.flat().find(([, , c]) => c === x.code) ?? [false, false])
        if (u && d) {
            if (shift) {
                globalText = globalText + u
                setText(globalText)
            } else {

                globalText = globalText + d
                setText(globalText)
            }
        }
    }
    useEffect(() => {
        window.document.addEventListener('keydown', down)
        window.document.addEventListener('keyup', up)
    }, []);


    return (
        <div className="App">
            <Row justify={'center'} style={{'margin': '150px 0 50px 0'}}>
                <Col xs={'content'}>
                    <textarea rows={1} className={'textbox'} type={'text'} value={text}/>
                </Col>
                <Col style={{'padding': '0'}} xs={'content'}>
                    <button onClick={() => {
                        globalText = ''
                        setText(globalText)
                    }}>✖
                    </button>
                </Col>
            </Row>

            <Row justify={'center'} style={{'margin': '100px 0 50px 0'}}>
                <Col xs={'content'}>
                    <Keyboard pressed={pressed} layout={layout} onChange={x => setText(x)}
                              shiftState={global['ShiftLeft'] || global['ShiftRight']}

                    />
                </Col>
            </Row>
            <Row justify={'center'} style={{'margin': '50px 0 50px 0'}}>
                <Col xs={'content'}>

                    <label htmlFor="lyt-qwerty">
                        <input name='lay' id={'lyt-qwerty'} checked={globalLayout === qwerty}
                               type={'radio'} onClick={() => {
                            globalLayout = qwerty
                            setLayout(qwerty)
                        }}/>

                        <img alt={'uk flag'} src={ukFlag} className={'flag'}/>
                        QWERTY</label>
                    <label htmlFor="lyt-isl-lat">
                        <input name='lay' id={'lyt-isl-lat'} type={'radio'}
                               onClick={() => {
                                   globalLayout = IslLatin
                                   setLayout(IslLatin)
                               }}/>
                        <img alt={'isl flag'} src={islFlag} className={'flag'}/> MSl ŽĚERTY</label>
                    <label htmlFor="lyt-isl-cyr">
                        <input name='lay' id={'lyt-isl-cyr'} type={'radio'}
                               onClick={() => {
                                   globalLayout = IslCyrillic
                                   setLayout(IslCyrillic)
                               }}/><img alt={'isl flag'} src={islFlag}
                                        className={'flag'}/> МСл JЦУКЕН</label>

                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xs={'content'}>
                    <h2>Dostati | Достати</h2>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xs={'content'}>
                    <a className={'download'} href={process.env.public_url+"/keyboards/mslavlat.zip"}>Windows - Latinica - ŽĚERTY</a><br/>
                    <a className={'download'} href={process.env.public_url+"/keyboards/mslavcyr.zip"}>Windows - Кирилица - JЦУКЕН </a><br/>
                </Col>
            </Row>
        </div>
    );
}

export default App;
