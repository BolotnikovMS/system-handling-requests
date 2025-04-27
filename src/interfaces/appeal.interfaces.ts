interface INewAppeal {
	title: string
	description: string
}

interface ICloseAppeal {
	result: string
}

interface ICancelAppeal {
	cancellationMessage: string
}

export { ICancelAppeal, ICloseAppeal, INewAppeal }
