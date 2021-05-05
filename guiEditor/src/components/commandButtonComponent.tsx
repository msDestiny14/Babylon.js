import * as React from "react";
import { GlobalState } from '../globalState';

interface ICommandButtonComponentProps {
    globalState: GlobalState;
    tooltip: string;   
    shortcut?: string;
    icon: string; 
    isActive: boolean;
    onClick: () => void;
}

export class CommandButtonComponent extends React.Component<ICommandButtonComponentProps> {    
  
    public constructor(props: ICommandButtonComponentProps) {
        super(props);
    }    

   
    public render() {
        const active = this.props.isActive ? 'active' : '';
        return (
            <div className={`command-button ${active}`} onClick={this.props.onClick} title={`${this.props.tooltip} ${this.props.shortcut ? "\n" + this.props.shortcut : ""}`}>
                <div className={"command-button-icon " + (this.props.isActive ? "active" : "")}>
                    <img src={"../imgs/" + this.props.icon + ".svg"} color="white" className={this.props.isActive ? "active" : ""}/>
                </div>
                <div className="command-label">
                    {this.props.tooltip}
                </div>
            </div>
        );
    }
}
