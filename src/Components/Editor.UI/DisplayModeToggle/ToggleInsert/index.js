// @flow
import React from 'react'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Button from '../Button'

import { connect } from 'react-redux'

import { insertMode } from '#/Editor.Core/actions/display'
import { isInsertMode } from '#/Editor.Core/selector/display'
import { createStructuredSelector } from 'reselect'

const Inner = ({
  isInsertMode,
  insertMode
}: {
  isInsertMode: boolean,
  insertMode: Function
}) => (
  <Button
    icon={<ContentAdd />}
    description="添加组件"
    active={isInsertMode}
    onClick={insertMode}
  />
)

const mapStateToProps = createStructuredSelector({ isInsertMode })
const mapDispatchToProps = { insertMode }

export default connect(mapStateToProps, mapDispatchToProps)(Inner)
