import React from "react";
import "./style.css";

function Modal(props) {
  return (
    <div className="modal fade" id="victoryModal" tabindex="-1" role="dialog" aria-labelledby="victoryModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalTitle">Epic Win!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img alt="waldo victory" src="../public/pictures/friends-waldo.png"/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Modal;
