// Type definitions for ag-grid v14.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IComponent } from "../../interfaces/iComponent";
import { AgGridComponentFunctionInput } from "./componentProvider";
export interface ComponentMetadata {
    mandatoryMethodList: string[];
    optionalMethodList: string[];
    functionAdapter?: (callback: AgGridComponentFunctionInput) => {
        new (): IComponent<any>;
    };
}
export declare class ComponentMetadataProvider {
    private componentMetaData;
    private agComponentUtils;
    postConstruct(): void;
    retrieve(name: string): ComponentMetadata;
}
