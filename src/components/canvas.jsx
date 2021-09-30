import {Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import { Stage, Layer, Rect, Text } from 'react-konva';

function Canvas() {
    return (
        <>
            <Container>
                <Row xxl={'12'}>
                    <Col lg={4}>
                        <InputGroup>
                            <InputGroup.Text>bhScript</InputGroup.Text>
                            <FormControl as="textarea" aria-label="bhScript" />
                        </InputGroup>
                    </Col>
                    <Col lg={8}>
                        <Stage>
                            <Layer>

                            </Layer>
                        </Stage>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Canvas