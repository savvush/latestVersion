
import { createContext, useReducer, useContext, useMemo } from "react"

const GlobalStateContext = createContext(null);
const GlobalDispatchContext = createContext(null);



export function GlobalProvider({ children }) {

    const [intermediateState, globalDispatch] = useReducer(globalReducer, globalInitialState);

    const globalState = useMemo(() => { return intermediateState }, [intermediateState.user, intermediateState.screenName, intermediateState.onboarded]);
    //const globalDispatch = useCallback(mDisp);

    //rconsole.log("Status: " + JSON.stringify(globalState));

    return (
        <GlobalStateContext.Provider value={globalState}>
            <GlobalDispatchContext.Provider value={globalDispatch}>
                {children}
                {/* <View style={{ backgroundColor: 'yellow', flex: 1, marginTop: 50, padding: 10, borderRadius: 30, borderColor: 'gray', borderWidth: 3 }} >
                    {children}
                </View> */}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
}

export function useGlobalState() {
    return useContext(GlobalStateContext);
}

export function useGlobalDispatch() {
    return useContext(GlobalDispatchContext);
}

function globalReducer(tasks, action) {
    console.log("Global dispatch is invoked with : " + action.type + ', screenName: ' + action.screenName)
    switch (action.type) {

        case 'splash':
            return {
                user: null,
                onboarded: false,
                screenName: 'OnBoarding',
                selectedItem: 'DummyItem',
                loaded: true,
                additionalState: 'InvestigateOtherStates',
                age: null,
                gender: null,
                typ: action.type,
                selectedTab: null

            }

            case 'onboarded': 
            return {
                user: action.user,
                screenName: action.screenName,
                onboarded: true,
                selectedItem: 'DummyItem',
                loaded: true,
                additionalState: 'InvestigateOtherStates',
                age: action.age,
                gender: action.gender,
                typ: action.type,
                selectedTab: null
            }

        case 'signedIn':
            return {
                user: action.user,
                onboarded: false,
                screenName: action.screenName,
                selectedItem: 'DummyItem',
                loaded: true,
                additionalState: 'InvestigateOtherStates',
                age: action.age,
                gender: action.gender,
                typ: action.type,
                selectedTab: null

            }

        case 'signedUp':
            return {
                user: action.user,
                onboarded: false,
                screenName: 'UserBoardingAgeSex',
                selectedItem: 'DummyItem',
                loaded: true,
                additionalState: 'InvestigateOtherStates',
                age: action.age,
                gender: action.age,
                typ: action.type,
                selectedTab: null
            }



        case 'signedOut':
            return {
                user: null,
                selectedItem: 'null',
                onboarded: false,
                laoded: false,
                screenName: 'splash',
                additionalState: 'InvestigateOtherStates',
                gender: null,
                age: null,
                typ: action.type,
                selectedTab: null

            }
            case 'selectedTab':
                return {
                    user: null,
                    selectedItem: 'null',
                    onboarded: false,
                    laoded: false,
                    screenName: 'splash',
                    additionalState: 'InvestigateOtherStates',
                    gender: null,
                    age: null,
                    typ: action.type,
                    selectedTab: null
    
                }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const globalInitialState = { user: null,  onboarded: false, selectedItem: null, loaded: false, screenName: 'Splash', additionalState: 'N/A', gender: 'U', age: '0', typ: null };

