FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app
COPY *.csproj ./
RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o out
FROM microsoft/dotnet:2.1-aspnetcore-runtime-alpine
WORKDIR /app
COPY --from=build-env /app/out .
EXPOSE 80
ENTRYPOINT ["dotnet", "dockerTestApi.dll"]
