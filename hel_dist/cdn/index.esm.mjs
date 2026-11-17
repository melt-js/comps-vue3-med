import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/
const LIB_NAME = 'comps-vue3-med';

/**
 * 将提供给用户的 lib 暴露出去（同时也暴露了类型）
 */
const dtlib = exposeLib(LIB_NAME);
const MedPatientCard = dtlib.MedPatientCard;
const MedVitalSign = dtlib.MedVitalSign;
const MedExamTimeline = dtlib.MedExamTimeline;
const App = dtlib.App;

export { App, MedExamTimeline, MedPatientCard, MedVitalSign, dtlib as default, dtlib };
