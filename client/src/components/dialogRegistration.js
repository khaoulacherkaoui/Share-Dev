import React from 'react';
import {Dialog,DialogTitle,DialogContent} from '@material-ui/core';

const { title,children, openDialog, setOpenDialog } = this.props;  


export default function dialogRegistration(props){
  return (
    <div>
      <Dialog open={openDialog}>
        <DialogTitle >
          <div>
            SIGN UP
          </div>
        </DialogTitle>
        <DialogContent >
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
