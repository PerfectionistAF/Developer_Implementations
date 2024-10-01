CREATE TABLE [dbo].[UserTable]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(50) NOT NULL, 
    [Phone] NUMERIC(11) NOT NULL, 
    [Age] INT NULL, 
    [Password] NVARCHAR(MAX) NOT NULL
)
