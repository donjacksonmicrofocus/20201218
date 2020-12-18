Dim RunningTotal, CurrentPrice

AIUtil.SetContext Browser("creationtime:=0")

Set TextAnchor = AIUtil.FindTextBlock("Basic", micFromTop, 1)
Set ClickAnchor = AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, TextAnchor)

ClickAnchor.Highlight
CurrentPrice = ClickAnchor.GetText
'Write code to parse the string into the number then keep a running total
RunningTotal = RunningTotal + CurrentPrice

'Format the RunningTotal to have the $ and the cents in the string
AIUtil.FindTextBlock(RunningTotal).CheckExists true

For i = 1 To 3
	Set TextAnchor = AIUtil.FindTextBlock("Unlimited Data", micFromTop, i)
	Set ClickAnchor = AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, TextAnchor)
	
Next
Set TextAnchor = AIUtil.FindTextBlock("Unlimited Data", micFromTop, 1)
AIUtil("down_triangle", micAnyText, micFromTop, 1).Click


AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("uscellular").Click
