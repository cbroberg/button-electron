import React, { Component } from 'react'
import { Layout, Wrapper, Spacer } from './components/Styles'
/*eslint-disable*/
import IconTest from './IconTest'
import { ButtonTest, ButtonTest2 } from './ButtonTest'
/*eslint-enable*/

const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
)

class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                <Layout>
                    <div>
                        <ButtonTest />
                        <Spacer space={'0.8rem'} />
                        <ButtonTest2 />
                        <Spacer space={'0.8rem'} />
                        {/*<IconTest />*/}
                        <HelloWorld name="Christian"/>
                    </div>
                </Layout>
                </Wrapper>
            </div>
    )    
  }
}

export default App
