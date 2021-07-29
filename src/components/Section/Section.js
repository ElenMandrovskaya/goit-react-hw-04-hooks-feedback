import PropTypes from "prop-types";
import { Container, Title } from "./Section.styles";

function Section({title, children}) {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Section;
