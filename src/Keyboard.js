import './Keyboard.sass'
import {KeyCap} from "./KeyCap";
import {Col, Row} from "react-grid-system";

export function Keyboard({pressed, layout, shiftState}) {
    return <Row justify={'center'}>
        <Col xs={'content'} style={{'padding': 0}}>
            <div className={'Keyboard'}>
                <Row justify={'center'}>
                    {
                        layout[0].map(
                            ([lower, upper, code]) => <Col xs={'content'} style={{'padding': 0}}>
                                <KeyCap shift={shiftState}
                                        lower={lower} code={code} key={code}
                                        upper={upper} pressed={pressed}

                                /> </Col>)}


                    <Col xs={'content'} style={{'padding': 0}}> <KeyCap modifier type={'backspace'} code={'Backspace'}
                                                                        pressed={pressed}/></Col>
                </Row>

                <Row align={'center'}>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} type={'tab'} code={'Tab'} modifier/>
                    </Col>
                    {
                        layout[1].map(
                            ([lower, upper, code]) => <Col xs={'content'} style={{'padding': 0}}>
                                <KeyCap shift={shiftState}
                                        lower={lower} code={code}
                                        upper={upper} pressed={pressed}
                                        key={lower}

                                /></Col>)}
                    <Col xs={'content'} style={{'padding': 0}}><KeyCap shift={shiftState}
                                                                       lower={'\\'} code={'Backslash'} pressed={pressed}
                                                                       upper={'|'} className={'one5'}/></Col>
                </Row>
                <Row justify={'center'}>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap type={'caps'} pressed={pressed} modifier code={'CapsLock'}/>
                    </Col>

                    {
                        layout[2].map(
                            ([lower, upper, code]) => <Col xs={'content'} style={{'padding': 0}}>
                                <KeyCap shift={shiftState}
                                        lower={lower} code={code} key={code}
                                        upper={upper} pressed={pressed}

                                /></Col>)}

                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap type={'enter'} code={'Enter'} control pressed={pressed}/>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'ShiftLeft'} modifier type={'lshift'}/>
                    </Col>

                    {
                        layout[3].map(
                            ([lower, upper, code]) => <Col xs={'content'} style={{'padding': 0}}> <KeyCap
                                shift={shiftState}
                                lower={lower} code={code}
                                upper={upper} pressed={pressed}
                                key={code}

                            /> </Col>)}
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap type={'rshift'} code={'ShiftRight'} pressed={pressed} modifier/>
                    </Col>

                </Row>

                <Row>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'ControlLeft'} type={'ctrl'} control/>
                    </Col>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'MetaLeft'} type={'super'} control/>
                    </Col>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'AltLeft'} type={'alt'} control/>
                    </Col>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'Space'} type={'space'} modifier/>
                    </Col>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'AltRight'} type={'alt'} control/>
                    </Col>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'MetaRight'} type={'super'} control/>
                    </Col>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'ContextMenu'} type={'options'} control/>
                    </Col>
                    <Col xs={'content'} style={{'padding': 0}}>
                        <KeyCap pressed={pressed} code={'ControlRight'} type={'ctrl'} control/>
                    </Col>
                </Row>

            </div>
        </Col>
    </Row>
}