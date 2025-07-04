import { Col, Container, Row } from "reactstrap";

function ProjectPage({title,type,languages,date,video,description, link = "", linkTitle=""}){
    return(
        <>
            <Container className="fs-4">
                <h1 className="col-12 mt-4 fs-1">{title}</h1>
                <Row className="mt-2">
                    <Col>
                        <em>{type}</em> - {languages}
                    </Col>
                    <Col className="text-end">
                        {date}
                    </Col>
                </Row>
                {link!=="" && linkTitle!=="" && 
                    <Row className="justify-content-center fs-1">
                        <Col xs="auto">
                            <a href={link} target="_blank" rel="noopener noreferrer">{linkTitle}</a>
                        </Col>
                    </Row>
                }
                <Row className="my-4">
                    <iframe src={video} title={title} className="mx-auto"></iframe>
                </Row>
                <Row>
                    <Col >
                        {description}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProjectPage;