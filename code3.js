gdjs.Death_32SceneCode = {};
gdjs.Death_32SceneCode.localVariables = [];
gdjs.Death_32SceneCode.idToCallbackMap = new Map();
gdjs.Death_32SceneCode.GDSkullObjects1= [];
gdjs.Death_32SceneCode.GDSkullObjects2= [];
gdjs.Death_32SceneCode.GDSkullObjects3= [];
gdjs.Death_32SceneCode.GDGame_9595OverObjects1= [];
gdjs.Death_32SceneCode.GDGame_9595OverObjects2= [];
gdjs.Death_32SceneCode.GDGame_9595OverObjects3= [];
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects1= [];
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects2= [];
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects3= [];
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1= [];
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2= [];
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects3= [];
gdjs.Death_32SceneCode.GDNewSprite2Objects1= [];
gdjs.Death_32SceneCode.GDNewSprite2Objects2= [];
gdjs.Death_32SceneCode.GDNewSprite2Objects3= [];
gdjs.Death_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Death_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Death_32SceneCode.GDNewSpriteObjects3= [];
gdjs.Death_32SceneCode.GDGhostObjects1= [];
gdjs.Death_32SceneCode.GDGhostObjects2= [];
gdjs.Death_32SceneCode.GDGhostObjects3= [];
gdjs.Death_32SceneCode.GDGhost2Objects1= [];
gdjs.Death_32SceneCode.GDGhost2Objects2= [];
gdjs.Death_32SceneCode.GDGhost2Objects3= [];
gdjs.Death_32SceneCode.GDScoreObjects1= [];
gdjs.Death_32SceneCode.GDScoreObjects2= [];
gdjs.Death_32SceneCode.GDScoreObjects3= [];


gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDGame_95959595OverObjects1Objects = Hashtable.newFrom({"Game_Over": gdjs.Death_32SceneCode.GDGame_9595OverObjects1});
gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDThanks_95959595for_95959595PlayingObjects1Objects = Hashtable.newFrom({"Thanks_for_Playing": gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects1});
gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects2Objects = Hashtable.newFrom({"Try_Again_": gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2});
gdjs.Death_32SceneCode.asyncCallback12705156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects2Objects, 700, 663, "");
}
gdjs.Death_32SceneCode.localVariables.length = 0;
}
gdjs.Death_32SceneCode.idToCallbackMap.set(12705156, gdjs.Death_32SceneCode.asyncCallback12705156);
gdjs.Death_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Death_32SceneCode.asyncCallback12705156(runtimeScene, asyncObjectsList)), 12705156, asyncObjectsList);
}
}

}


};gdjs.Death_32SceneCode.asyncCallback12706172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Death_32SceneCode.GDNewSprite2Objects2);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDNewSprite2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("HERRO", 0, "linear", 1, true);
}
}
gdjs.Death_32SceneCode.localVariables.length = 0;
}
gdjs.Death_32SceneCode.idToCallbackMap.set(12706172, gdjs.Death_32SceneCode.asyncCallback12706172);
gdjs.Death_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Death_32SceneCode.asyncCallback12706172(runtimeScene, asyncObjectsList)), 12706172, asyncObjectsList);
}
}

}


};gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDSkullObjects1Objects = Hashtable.newFrom({"Skull": gdjs.Death_32SceneCode.GDSkullObjects1});
gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects = Hashtable.newFrom({"Try_Again_": gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1});
gdjs.Death_32SceneCode.asyncCallback23752124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(7).add(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(1700);
}
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Start", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}
gdjs.Death_32SceneCode.localVariables.length = 0;
}
gdjs.Death_32SceneCode.idToCallbackMap.set(23752124, gdjs.Death_32SceneCode.asyncCallback23752124);
gdjs.Death_32SceneCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Death_32SceneCode.asyncCallback23752124(runtimeScene, asyncObjectsList)), 23752124, asyncObjectsList);
}
}

}


};gdjs.Death_32SceneCode.asyncCallback12703476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Try_Again_"), gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2);

{for(var i = 0, len = gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2[i].getBehavior("Scale").setScale(1.05);
}
}

{ //Subevents
gdjs.Death_32SceneCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Death_32SceneCode.localVariables.length = 0;
}
gdjs.Death_32SceneCode.idToCallbackMap.set(12703476, gdjs.Death_32SceneCode.asyncCallback12703476);
gdjs.Death_32SceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
for (const obj of gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1) asyncObjectsList.addObject("Try_Again_", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Death_32SceneCode.asyncCallback12703476(runtimeScene, asyncObjectsList)), 12703476, asyncObjectsList);
}
}

}


};gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDScoreObjects1Objects = Hashtable.newFrom({"Score": gdjs.Death_32SceneCode.GDScoreObjects1});
gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDScoreObjects1Objects = Hashtable.newFrom({"Score": gdjs.Death_32SceneCode.GDScoreObjects1});
gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects = Hashtable.newFrom({"Try_Again_": gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1});
gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects = Hashtable.newFrom({"Try_Again_": gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1});
gdjs.Death_32SceneCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.Death_32SceneCode.GDGame_9595OverObjects1.length = 0;

gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects1.length = 0;

{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Infinite Peace.aac", 3, false, 100, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skull_remove");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skull_create");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDGame_95959595OverObjects1Objects, 680, 438, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDThanks_95959595for_95959595PlayingObjects1Objects, 535, 550, "");
}

{ //Subevents
gdjs.Death_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Death_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "skull_create") >= 0.00001;
if (isConditionTrue_0) {
gdjs.Death_32SceneCode.GDSkullObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDSkullObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Top");
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDSkullObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDSkullObjects1[i].getBehavior("Scale").setScale(gdjs.Death_32SceneCode.GDSkullObjects1[i].getBehavior("Scale").getScale() + (10));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skull_create");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "skull_remove") >= 0.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skull"), gdjs.Death_32SceneCode.GDSkullObjects1);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDSkullObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDSkullObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "skull_remove");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1 */
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1[i].getBehavior("Scale").setScale(1);
}
}

{ //Subevents
gdjs.Death_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Death_32SceneCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDNewSpriteObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23755420);
}
}
if (isConditionTrue_0) {
gdjs.Death_32SceneCode.GDScoreObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(Math.round(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber()));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDScoreObjects1Objects, 660, 350, "");
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDScoreObjects1[i].getBehavior("Text").setText("New High Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber()));
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(21).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23757372);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.Death_32SceneCode.GDScoreObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDScoreObjects1Objects, 750, 350, "");
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDScoreObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber())));
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23753892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1 */
{for(var i = 0, len = gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1[i].getBehavior("Scale").setScale(1.05);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23752388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1 */
{for(var i = 0, len = gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1[i].getBehavior("Scale").setScale(1);
}
}
}

}

}

};

gdjs.Death_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_32SceneCode.GDSkullObjects1.length = 0;
gdjs.Death_32SceneCode.GDSkullObjects2.length = 0;
gdjs.Death_32SceneCode.GDSkullObjects3.length = 0;
gdjs.Death_32SceneCode.GDGame_9595OverObjects1.length = 0;
gdjs.Death_32SceneCode.GDGame_9595OverObjects2.length = 0;
gdjs.Death_32SceneCode.GDGame_9595OverObjects3.length = 0;
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects1.length = 0;
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects2.length = 0;
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects3.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects3.length = 0;
gdjs.Death_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Death_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Death_32SceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Death_32SceneCode.GDGhostObjects1.length = 0;
gdjs.Death_32SceneCode.GDGhostObjects2.length = 0;
gdjs.Death_32SceneCode.GDGhostObjects3.length = 0;
gdjs.Death_32SceneCode.GDGhost2Objects1.length = 0;
gdjs.Death_32SceneCode.GDGhost2Objects2.length = 0;
gdjs.Death_32SceneCode.GDGhost2Objects3.length = 0;
gdjs.Death_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Death_32SceneCode.GDScoreObjects2.length = 0;
gdjs.Death_32SceneCode.GDScoreObjects3.length = 0;

gdjs.Death_32SceneCode.eventsList4(runtimeScene);
gdjs.Death_32SceneCode.GDSkullObjects1.length = 0;
gdjs.Death_32SceneCode.GDSkullObjects2.length = 0;
gdjs.Death_32SceneCode.GDSkullObjects3.length = 0;
gdjs.Death_32SceneCode.GDGame_9595OverObjects1.length = 0;
gdjs.Death_32SceneCode.GDGame_9595OverObjects2.length = 0;
gdjs.Death_32SceneCode.GDGame_9595OverObjects3.length = 0;
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects1.length = 0;
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects2.length = 0;
gdjs.Death_32SceneCode.GDThanks_9595for_9595PlayingObjects3.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects3.length = 0;
gdjs.Death_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Death_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Death_32SceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Death_32SceneCode.GDGhostObjects1.length = 0;
gdjs.Death_32SceneCode.GDGhostObjects2.length = 0;
gdjs.Death_32SceneCode.GDGhostObjects3.length = 0;
gdjs.Death_32SceneCode.GDGhost2Objects1.length = 0;
gdjs.Death_32SceneCode.GDGhost2Objects2.length = 0;
gdjs.Death_32SceneCode.GDGhost2Objects3.length = 0;
gdjs.Death_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Death_32SceneCode.GDScoreObjects2.length = 0;
gdjs.Death_32SceneCode.GDScoreObjects3.length = 0;


return;

}

gdjs['Death_32SceneCode'] = gdjs.Death_32SceneCode;
