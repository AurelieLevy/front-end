import React from "react"

import request from "src/resources/request"
import styled from "styled-components"

import { Form, Icon, Input, Button, Checkbox } from "antd"
const FormItem = Form.Item

import "./style.scss"

class NormalLoginForm extends React.Component {
    state = {
        loading: false
    }

    login = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true })
                const { username, password } = values
                request.post("auth", { username, password }, res => {
                    console.log(res)
                    if (res.token) {
                        localStorage.setItem("token", res.token)
                        this.props.history.push("/map")
                    }
                })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <LoginWrapper>
                <Form onSubmit={this.login} className="login-form">
                    <FormItem>
                        {getFieldDecorator("username", {
                            rules: [{ required: true, message: "Please input your username!" }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                placeholder="Username"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator("password", {
                            rules: [{ required: true, message: "Please input your Password!" }]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator("remember", {
                            valuePropName: "checked",
                            initialValue: true
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </LoginWrapper>
        )
    }
}

module.exports = Form.create()(NormalLoginForm)
const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
`
