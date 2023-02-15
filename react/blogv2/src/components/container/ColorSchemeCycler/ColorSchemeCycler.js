import { useContext, useEffect } from 'react';
import { AppStateContext } from '../../../state/context';
import Actions from '../../../state/Actions';

import './ColorSchemeCycler.scss';

function ColorSchemeCycler() {
    const { appState, dispatchAppState } = useContext(AppStateContext);

    // TODO: Outsource in custom hook
    const colorSchemes = [
        { name: 'dark', icon: '☽' },
        { name: 'light', icon: '☼' },
        { name: 'colorful', icon: '🔥' },
    ];

    useEffect(() => {
        let colorScheme;
        try {
            colorScheme = JSON.parse(localStorage.getItem('colorScheme'));
        }
        catch (e) {
            console.log(e);
        }
        if (!colorScheme || !Object.keys(colorScheme).length) {
            colorScheme = colorSchemes[0];
        }

        dispatchAppState({
            type: Actions.SetColorScheme,
            payload: { colorScheme: colorScheme },
        })
    }, []);


    useEffect(() => {
        localStorage.setItem('colorScheme', JSON.stringify(appState.colorScheme));
    }, [appState.colorScheme]);

    const currentTheme = appState.colorScheme ? appState.colorScheme : colorSchemes[0];
    const nextTheme = colorSchemes[(colorSchemes.findIndex(el => el.name === currentTheme.name) + 1) % colorSchemes.length];

    return (
        <button
            className={`ColorSchemeCycler ColorSchemeCycler--${appState.colorScheme.name}`}
            onClick={(e) =>
                dispatchAppState({
                    type: Actions.SetColorScheme,
                    payload: { colorScheme: nextTheme },
                })
            }>
            {currentTheme.icon}
        </button>
    );
}

export default ColorSchemeCycler;
