import styled from styled-components
import Product from './Product'

const PageStyle = styled.div`
    margin: 0 100px 0 0;
`

export default class PageWrapper extends Component {
    render() {
        return (
            <PageStyle>
                <Product />
            </PageStyle>
        )
    }
}