import React from 'react'
import { Link } from 'react-router-dom'

import { TextInput, SearchUser } from '../components/Inputs'
import { SearchButton } from '../components/Buttons'
import { MenuDropdown } from '../components/Dropdown'
import { Button, Modal } from 'semantic-ui-react'

export default class MenuBar extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'user',
        url: '/profile/:id'
      },
      searchTerm: '',
      isOpen: false,
      invitationTarget: ''
    }

    this.handleSearchBar = this.handleSearchBar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleModal = this.handleModal.bind(this)
  }

  handleSearchBar(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit(event) {
    if (event.keyCode === 13 || event.type === "click") {
      //찾는 것
    }
  }

  handleModal() {
    this.setState({isOpen: !this.state.isOpen})    
  }

  handleInvitation(event) {
    this.setState({invitationTarget: event.target.value})
  }

  invite() {
    //초대하기
  }

  render() {
    return (
      <div class="ui teal large inverted stackable menu">
        <div class="item">
          <Link to="/">
            <span>Timeline</span>
          </Link>
        </div>
        <div class="right menu">
          <div class="item">
            <TextInput placeholder="검색" onChange={this.handleSearchBar}/>
            <SearchButton onClick={this.handleSubmit}/>
          </div>
          <div class="item">
            <Button inverted onClick={this.handleModal}>
            초대하기
            </Button>
            <Modal
              open={this.state.isOpen}
              closeOnEscape={true}
              closeOnDimmerClick={false}
              style={{
                height: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
              }}
            >
              <Modal.Header>초대하기</Modal.Header>
              <Modal.Content>
                <form onSubmit={this.invite}>
                  <SearchUser placeholder="이메일을 입력하세요"/>
                </form>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={this.handleModal} negative>
                  닫기
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
          <MenuDropdown 
            options={
              [
                {
                  url: this.state.user.profile,
                  label: "프로필"
                },
                {
                  url: "/logout",
                  label: "로그아웃"
                }
              ]
            }
            label={this.state.user.name}
          />
        </div>
      </div>
    )
  }
}
