class DataReceiverException(Exception):

    def __init__(self, status_code, message='Ошибка при обращении к внешнему источнику данных'):
        super().__init__(message)
        self.status_code = status_code
